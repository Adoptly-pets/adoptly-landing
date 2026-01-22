import { ROLES_DATA } from '../../constants/ROLES_DATA';
import './Roles.css';

const Roles = () => {
  return (
    <div className="roles">
      {ROLES_DATA.map(role => (
        <div key={role.name} className="role-card">
          <img src={role.icon} alt={role.name} />
          <div className="role-info">
            <p>{role.name}</p>
            <p className="role-description">{role.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Roles;
