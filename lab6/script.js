function Hello(props) {
    return <div>
    <p>Имя: {props.name}</p>
    <p>Возраст: {props.age}</p>
    </div>;
}

ReactDOM.render(
    <Hello name="Veronica" age="20"/>,
    document.getElementById("app1")
)



class ClickButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {class: "off", label: "Нажми"};

        this.press = this.press.bind(this);
    }
    press(){
        let className = (this.state.class==="off")?"on":"off";
        this.setState({class: className});
    }
    render() {
        return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
    }
}

ReactDOM.render(
    <ClickButton />,
    document.getElementById("app3")
)
