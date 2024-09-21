
import { pinnedRepoType } from '../../data/pinnedRepos';
import PinnedImageProjects from '../PinnedImageProjects/PinnedImageProjects';


interface PinnedProjectsProps {
  projectData: pinnedRepoType;
  left: boolean;
}

const PinnedProjects = ({projectData, left }: PinnedProjectsProps) => {
  if (projectData && projectData?.image) {
    return <PinnedImageProjects  left={left}  projectData={projectData} />;
  }
};

export default PinnedProjects;