import { ROLES_DATA } from '../../constants/ROLES_DATA';

const Roles = () => {
  return (
    <div className="roles">
      {ROLES_DATA.map(role => (
        <div key={role.name} className="role">
          <img src={role.icon} alt={role.name} />
          <p>{role.name}</p>
        </div>
      ))}
    </div>
  );
};
export default Roles;
