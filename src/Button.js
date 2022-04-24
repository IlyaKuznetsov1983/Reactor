import "./Button.scss";

export const Button = ({title, type, hadleClick}) => {
    return (
        <Button className ="button" data-type ={type} onClick ={hadleClick}>
            {title}
        </Button>
    );
};