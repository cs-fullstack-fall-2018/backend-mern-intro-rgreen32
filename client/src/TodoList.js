import React, {Component} from 'react';



class TodoList extends Component {

    forEachItem() {
        var num =1
        var yes = this.props.arr.map(

            EachItem => {

                var state;
                if (EachItem.isDone === true) {
                    state = <s>{EachItem.todo}</s>
                } else {
                    state = EachItem.todo
                }
                EachItem.number = num
                num++
                return (

                    <div>
                        <p>{EachItem.number}</p>
                        <p>{EachItem._id}</p>
                        <p>{EachItem.username}</p>
                        <p>{state}</p>
                        <button onClick={() => this.props.deletion(EachItem._id)}>Delete</button>
                    </div>

                )
            }
        );
        return yes
    }
    render() {
        //console.log(this.props.arr);
        var stuff = this.forEachItem()
        return (
            <div>
                <h2>{stuff}</h2>
            </div>
        );
    }

}

export default TodoList;