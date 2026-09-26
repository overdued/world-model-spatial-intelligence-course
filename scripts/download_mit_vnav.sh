#!/bin/bash
# MIT 16.485 VNAV (Fall 2020) OCW downloader
# Fetches each OCW resource page, extracts the PDF link, downloads with a meaningful name.
ROOT="/Users/ik/博一/尹老师杂物/world-model-课程/world-model-spatial-intelligence-course"
COURSE_DIR="$ROOT/courses/mit_vnav"
LOG="$ROOT/logs/download.log"
BASE="https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020"
CID="mit_vnav"
MAX_BYTES=$((50*1024*1024))

log() { echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] [$CID] $1" >> "$LOG"; }

declare -a ITEMS=(
  "mit16_485f20_lec01|lectures|L01_introduction_to_vnav.pdf"
  "mit16_485f20_lec02and03|lectures|L02_L03_3d_geometric_basics.pdf"
  "mit16_485f20_lec04|lectures|L04_L05_lie_groups_and_distances.pdf"
  "mit16_485f20_lec06notes|lectures|L06_quadrotor_dynamics_notes.pdf"
  "mit16_485f20_lec07notes|lectures|L07_quadrotor_control_notes.pdf"
  "mit16_485f20_lec08|lectures|L08_trajectory_optimization_1.pdf"
  "mit16_485f20_lec09|lectures|L09_trajectory_optimization_2_slides.pdf"
  "mit16_485f20_lec10|lectures|L10_trajectory_optimization_3.pdf"
  "mit16_485f20_lec11|lectures|L11_image_formation_slides.pdf"
  "mit16_485f20_lec12lec13|lectures|L12_L13_feature_detection_tracking_slides.pdf"
  "mit16_485f20_lec14|lectures|L14_two_view_geometry.pdf"
  "mit16_485f20_lec15|lectures|L15_ransac_3d3d_correspondences_slides.pdf"
  "mit16_485f20_lec16|lectures|L16_ml_map_estimation_slides.pdf"
  "mit16_485f20_lec17part1|lectures|L17_nonlinear_least_squares_part1.pdf"
  "mit16_485f20_lec17part2|lectures|L17_nonlinear_least_squares_part2.pdf"
  "mit16_485f20_lec18|lectures|L18_lm_optimization_on_manifolds.pdf"
  "mit16_485f20_lec19|lectures|L19_optimization_on_manifolds.pdf"
  "mit16_485f20_lec20|lectures|L20_visual_and_visual_inertial_odometry.pdf"
  "mit16_485f20_lec21|lectures|L21_place_recognition.pdf"
  "mit16_485f20_lec22|lectures|L22_bag_of_words_object_detection.pdf"
  "mit16_485f20_lec23|lectures|L23_slam_i_formulations_sparsity.pdf"
  "mit16_485f20_lec24|lectures|L24_slam_ii_factor_graphs_marginalization.pdf"
  "mit16_485f20_lec25|lectures|L25_dense_3d_reconstruction.pdf"
  "mit16_485f20_lec28|lectures|L28_incremental_slam_solvers.pdf"
  "mit16_485f20_lec30|lectures|L30_outlier_robust_perception_1.pdf"
  "mit_16_485f20_lab1notes|labs|lab1_setup_notes.pdf"
  "mit_16_485f20_lab1slides|labs|lab1_slides.pdf"
  "mit_16_485f20_lab2slides|labs|lab2_ros_slides.pdf"
  "mit16_485f20_lab4slides|labs|lab4_slides.pdf"
  "mit_16_485f20_lab6slides|labs|lab6_slides.pdf"
)

for item in "${ITEMS[@]}"; do
  slug="${item%%|*}"; rest="${item#*|}"; sub="${rest%%|*}"; fname="${rest#*|}"
  dest="$COURSE_DIR/$sub/$fname"
  page="$BASE/resources/$slug/"
  if [ -s "$dest" ]; then
    log "SKIP [cached] $page -> $dest (already exists)"
    continue
  fi
  html=$(curl -sL --max-time 60 "$page")
  pdfhref=$(echo "$html" | grep -oE 'href="/courses/16-485[^"]*\.pdf"' | head -1 | sed 's/href="//;s/"$//')
  if [ -z "$pdfhref" ]; then
    log "FAIL [no-pdf-link] $page -> no pdf href found on resource page"
    continue
  fi
  url="https://ocw.mit.edu$pdfhref"
  clen=$(curl -sIL --max-time 60 -o /dev/null -w "%{size_download}" "$url" >/dev/null; curl -sIL --max-time 60 "$url" | grep -i '^content-length' | tail -1 | tr -d '\r' | awk '{print $2}')
  if [ -n "$clen" ] && [ "$clen" -gt "$MAX_BYTES" ] 2>/dev/null; then
    log "SKIP [200] $url -> $dest (file too large: ${clen} bytes > 50MB)"
    continue
  fi
  tmp=$(mktemp /tmp/vnav_dl.XXXXXX)
  code=$(curl -sL --max-time 180 -w "%{http_code}" -o "$tmp" "$url")
  if [ "$code" = "200" ] && [ -s "$tmp" ]; then
    if file -b "$tmp" | grep -qi pdf; then
      mv "$tmp" "$dest"
      log "OK [$code] $url -> $dest"
    else
      rm -f "$tmp"
      log "FAIL [$code] $url -> not a PDF (content-type mismatch)"
    fi
  else
    rm -f "$tmp"
    log "FAIL [$code] $url -> $dest"
  fi
  sleep 1
done

# SHA256 dedup within course dir
declare -A seen
while IFS= read -r -d '' f; do
  h=$(shasum -a 256 "$f" | awk '{print $1}')
  if [ -n "${seen[$h]}" ]; then
    rm -f "$f"
    log "OK [dedup] duplicate of ${seen[$h]} removed -> $f"
  else
    seen[$h]="$f"
  fi
done < <(find "$COURSE_DIR" -name '*.pdf' -print0)

echo DONE
