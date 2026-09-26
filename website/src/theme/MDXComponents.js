import MDXComponents from '@theme-original/MDXComponents';
import ModuleProgress from '@site/src/components/ModuleProgress';
import TrackRoadmap from '@site/src/components/TrackRoadmap';
import ColabBadge from '@site/src/components/ColabBadge';
import CourseMatrix from '@site/src/components/CourseMatrix';
import UniversityCards from '@site/src/components/UniversityCards';
import PapersFilter from '@site/src/components/PapersFilter';

/**
 * Globally available MDX components — module authors can use
 * <ModuleProgress id="a01" label="..." />, <ColabBadge lab="..." />,
 * <TrackRoadmap track="scientist" /> etc. without an import statement.
 */
export default {
  ...MDXComponents,
  ModuleProgress,
  TrackRoadmap,
  ColabBadge,
  CourseMatrix,
  UniversityCards,
  PapersFilter,
};
