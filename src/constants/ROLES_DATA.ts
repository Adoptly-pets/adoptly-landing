import BA from '../assets/images/WhoCreatesAdoptly/BA.webp';
import Backend from '../assets/images/WhoCreatesAdoptly/Backend.webp';
import Frontend from '../assets/images/WhoCreatesAdoptly/Frontend.webp';
import ProjectManager from '../assets/images/WhoCreatesAdoptly/ProjectManager.webp';
import ProductManager from '../assets/images/WhoCreatesAdoptly/ProductManager.webp';
import QA from '../assets/images/WhoCreatesAdoptly/QA.webp';
import Designer from '../assets/images/WhoCreatesAdoptly/Designer.webp';

export interface Role {
  name: string;
  icon: string;
}

export const ROLES_DATA = [
  { name: 'Product Manager', icon: ProductManager },
  { name: 'Project Managers', icon: ProjectManager },
  { name: 'Business Analysts', icon: BA },
  { name: 'Frontend Developers', icon: Frontend },
  { name: 'Backend Developers', icon: Backend },
  { name: 'QA Engineers', icon: QA },
  { name: 'UI/UX Designer', icon: Designer },
];
