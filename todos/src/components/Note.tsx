import React from 'react';
import {Card , Button, Input,Label,Icon} from 'semantic-ui-react'
import Todo from './Todo';
import { observer } from 'mobx-react';

export type NoteProps = {
    _id : number;
    name : string;
    create : string;
    changed : string;
    items : {_id : number, text : string}[];
}

@observer
class Note extends React.Component<NoteProps> {
    state = {
        name:"",
        last:0,
        changed : this.props.create
    }

    nowDate = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        return dd + '/' + mm + '/' + yyyy;
    }
    onNew = ()=>{
        if(this.state.name.length > 0)
        {
            this.props.items.push({
            _id: this.state.last,
            text: this.state.name
            });
            this.setState({last:this.state.last+1, changed:this.nowDate()})
        }
    }    
    
    
    onNameChange(event:any){
        this.setState({name:event.target.value})
    }

    handleDeleteClick(event:any){

    }


    render(){
        return (
            <div className="App-header">
                <Label>
                    <Icon corner = 'top right' color = 'red' name='delete' link onClick={this.handleDeleteClick}/>
                    <Card fluid = {true}>
                        <Card.Content
                        header= {this.props.name}
                        meta={'Created: ' + this.props.create + '   Edited: ' + this.state.changed}                   
                        />
                        {this.props.items.map(item =>
                            <Todo key = {item._id} text = {item.text}></Todo>
                        )}
                        {"\n"}
                        <Input onChange={this.onNameChange.bind(this)} fluid = {true} size = "small" attached = 'top' placeholder="Name..."></Input>
                        <Button onClick={this.onNew} basic = {false} color = 'orange' size = 'small'>Add</Button>
                    </Card>
                </Label>
                
            </div>
         );
    }   
} 

export default Note;

// window.notesStore.notes.push({_id:0,name:"hello",create:1234,changed:4320,items: ["aaaa","bbbb","cccc"]})