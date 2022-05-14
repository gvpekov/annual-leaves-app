import "./styles.css";
function MenuButton(props) {

    return (
        <a href="#" className={props.active ? "active" : ""}>{props.children}</a>
    )
}
 export default MenuButton;