'use strict';

ReactDOM.render(
<h2>5 + 2 = {5 + 2}</h2>,
document.getElementById("app")
)
const userClassName = "user-info";

// styles
const styleObj= {
    color:'green',
    fontFamily:'Verdana'
};
const styleObj2= {
    color:'blue',
    fontFamily:'Ubuntu'
};

// const
const user = {
    id : 11,
    age: 19,
    firstName: 'Veronica',
    lastName: 'Molchanova',
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
};
const subject = {
    name: 'Web-программирование',
    teacher_firstname: 'Алевтина',
    teacher_lastname: 'Шаталова',
    teacher_patro: 'Юрьевна',
    date: '16.02.2021',
    answer: 'yes',
    getTeachername: function() {
        return `${this.teacher_lastname} ${this.teacher_firstname} ${this.teacher_patro}`;
    }
};

// для сборки
ReactDOM.render(
<div className={userClassName}  style={styleObj}>
    <p>Полное имя: {user.getFullName()}</p>
<p>Возраст: {user.age}</p>
</div>,
document.getElementById("app")
)

ReactDOM.render(
    <div className={userClassName}  style={styleObj2}>
        <p>Название предмета: {subject.name}</p>
        <p>Полное имя преподавателя: {subject.getTeachername()}</p>
        <p>Дата семинара: {subject.date}</p>
        <p>Выполнил лабораторную?: {subject.answer}</p>
    </div>,
    document.getElementById("app2")
)

