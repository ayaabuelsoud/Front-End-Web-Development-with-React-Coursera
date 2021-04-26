import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody ,CardTitle, Breadcrumb, BreadcrumbItem ,Button, FormGroup, Label, Modal, ModalBody, ModalHeader} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { TiEdit } from "react-icons/ti";
import { Loading } from './LoadingComponent';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isModalOpen : false
        };
    }

    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
      };

    submitComment = values => {
        this.toggleModal();
        // console.log("Current State is: " + JSON.stringify(values));
        // alert("Current State is: " + JSON.stringify(values));
        this.props.addComment(this.props.dishId , values.rating, values.author, values.comment);
    };

    render(){
        return (
          <React.Fragment>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
              <ModalBody>
                <LocalForm onSubmit={values => this.submitComment(values)}>
                  <FormGroup>
                    <Label htmlFor="rating">Rating</Label>
                    <Control.select
                      model=".rating"
                      id="rating"
                      name="rating"
                      className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Control.select>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="author">Author</Label>
                    <Control.text
                        placeholder="Your Name"
                      model=".author"
                      id="author"
                      name="author"
                      className="form-control"
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15)
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".author"
                      show="touched"
                      messages={{
                        required: "Required ",
                        minLength: "Must be greater than 2 characters ",
                        maxLength: "Must be 15 characters or less "
                      }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="comment">Comment</Label>
                    <Control.textarea
                      model=".comment"
                      id="comment"
                      name="comment"
                      rows="6"
                      className="form-control"/>
                  </FormGroup>
                  <Button type="submit" value="submit" color="primary">
                    Submit
                  </Button>
                </LocalForm>
              </ModalBody>
            </Modal>

            <Button outline onClick={this.toggleModal}>
              <span> <TiEdit/> Submit Comment </span> 
            </Button>

          </React.Fragment>
        );
    }
}
    function RenderDish({dish}){  
        if (dish != null){
            return (
              <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><h5>{dish.name} </h5></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
              </Card>
            );
        }
        else {
            return(
                <div />
            );
        }
    }

    function RenderComments({comments , addComment, dishId}) {
        if (comments != null) {
          const commetsSection = comments.map(comment => {
            return (
                <div>
                    <div key={comment.id}>
                        <div>{comment.comment}</div>
                        <div className="mt-2 mb-2">
                            -- {comment.author} , 
                            { new Intl.DateTimeFormat ('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </div>
                    </div>
                </div>  
            );
          });
          return (
            <div>
                {commetsSection}
                <CommentForm dishId={dishId} addComment={addComment} />
            </div>
          );
        } else return <div />;
    }

    const DishDetail = (props) => {
        //const {dish} = props;
        //const comments = dish ? (dish.comments || []) : [];
        if(props.isLoading) {
          return(
            <div className="container">
              <div className="row">            
                  <Loading />
                </div>
            </div>
          );
        }
        else if (props.errMess) {
          return(
            <div className="container">
              <div className="row">            
                <h4>{props.errMess}</h4>
              </div>
            </div>
          );
        }
        else if (props.dish != null) 
          return (
          <div className="container">
              <div className="row">
                  <Breadcrumb>
                      <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                      <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                      <h3>{props.dish.name}</h3>
                      <hr />
                  </div>                
              </div>
              <div className="row">
                  <div className="col-12 col-md-5 m-1">
                      <RenderDish dish= {props.dish} />    
                  </div>
                  <div className="col-12 col-md-5 m-2">
                      <h2>Comments</h2>
                      <RenderComments comments = {props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id}/>
                  </div>
              </div> 
          </div>
          );
    }

export default DishDetail;