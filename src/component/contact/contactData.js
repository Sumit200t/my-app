import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem.js'
import ContactWarp from '../contact/contact';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

const ContactData = (props) => {
    let mainData;
    if (localStorage.getItem('todoData') === null) {
        mainData = [];
    }
    else {
        mainData = JSON.parse(localStorage.getItem('todoData'));

    }

 /////////////////// Delete Function /////////////////  

    const onDelete = (data) => {
        settodoData(todoData.filter((e) => {
            return e !== data
        }
        ))
    }

////////////////////////// Update Function ///////////////////

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: '',
        msg: '',
        activeId: null,
        isUpdate:false

    })

    const onUpdate = (data) => {
        setUserInfo({
            name: data.name,
            email: data.email,
            phone: data.phone,
            msg: data.msg,
            activeId: data.id,
            isUpdate:true
        })
      
    }

    const updateTodo = (name, email, phone, msg, activeId) =>
    {
        let data = [...todoData]
        let index = data.findIndex((obj) => obj.id === activeId);
        data[index].name = name;
        data[index].email = email;
        data[index].phone = phone;
        data[index].msg = msg;
        setTodoData(data);
    }


/////////////////////////// Add function //////////////////

    const addTodo = (name, email, phone, msg) => {

        let id;
        if (todoData.length == 0) {
            id = 0;
        }
        else {
            id = todoData[todoData.length - 1].id + 1;
        }
        const newTodo =
        {
            id: id,
            name: name,
            email: email,
            phone: phone,
            msg: msg,
        }
        setTodoData([...todoData, newTodo]);
    }

///////////////////////////////////////////////////////////////////

    const [todoData, setTodoData] = useState(mainData);
     
    useEffect(() => {
        localStorage.setItem("todoData", JSON.stringify(todoData));
    }, [todoData]);

    return (
        <div>
            <Container className="todo-container">
                <Row>
                    <Col>
                        <ContactWarp addTodo={addTodo} updateTodo={updateTodo} userInfo={userInfo} />
                    </Col>
                    <Col>
                    
                        <h1>Below is Todo List </h1>
                        {todoData.map((todoData) => (
                            <TodoItem data={todoData}  key={todoData?.id} onDelete={onDelete} onUpdate={onUpdate} />
                        ))
                        }

                    </Col>
                </Row>
            </Container>
        </div >
    );
}



export default ContactData;