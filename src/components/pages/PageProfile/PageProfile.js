import "./pageProfile.scss";
import { Button } from "react-bootstrap";
import "../../usersList/usersList.scss";
import FormUser from "../../formUser/FormUser";



const PageProfile = (props) => {
  
  return (
    <>
      <div className="profile">
        <div className="profile-header mt-4">
            <h2>Профиль пользователя</h2>
        <Button variant="primary">
          Редактировать
        </Button>
        </div>
        <div className="profile-inputs mt-2 mb-4">
            <FormUser currentUser={props}/>
        </div>
      </div>  
    </>
  );
};
export default PageProfile;
