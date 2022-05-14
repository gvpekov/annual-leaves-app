import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faUser  } from '@fortawesome/free-regular-svg-icons';
import { faHouseChimney, faClockRotateLeft, faUsers, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import MenuButton from "../commons/MenuButton/MenuButton";

function SideMenu() {
    return (
        <div id="sideMenu">
            <div id="top-menu">
                <MenuButton href="#" active={true}><FontAwesomeIcon icon={faHouseChimney} /> Dashboard</MenuButton>
                <MenuButton href="#"><FontAwesomeIcon icon={faCalendarDays} /> Calendar</MenuButton>
                <MenuButton href="#"><FontAwesomeIcon icon={faClockRotateLeft} /> My leaves</MenuButton>
                <MenuButton href="#"><FontAwesomeIcon icon={faUsers} /> Employees</MenuButton>
                <MenuButton href="#"><FontAwesomeIcon icon={faUser} /> My account</MenuButton>
            </div>
            <div id="bottom-menu">
                <MenuButton href="#"><FontAwesomeIcon icon={faRightFromBracket} /> Logout</MenuButton>
            </div>
        </div>
    );
}

export default SideMenu;
