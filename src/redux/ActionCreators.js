import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
//import { baseUrl } from '../shared/baseUrl';

export const addComment = (dishId, rating , author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading());
    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
    //return fetch(baseUrl + 'dishes')
    // .then(response => response.json())
    // .then(dishes => dispatch(addDishes(dishes)));
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
}); 

// comments
export const fetchComments = () => (dispatch) => { 
    //dispatch(commentsLoading());
    setTimeout(() => {
        dispatch(addComments(COMMENTS));
    }, 2000);

    // return fetch(baseUrl + 'comments')
    // .then(response => response.json())
    // .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

//Promos
export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading());
    setTimeout(() => {
        dispatch(addPromos(PROMOTIONS));
    }, 2000);

    // return fetch(baseUrl + 'promotions')
    // .then(response => response.json())
    // .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});