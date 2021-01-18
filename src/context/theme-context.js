import React from 'react';
export const themes = {
    first: {
        id: 1,
        primary: {
            color: 'white',
            background: '#1abc9c'
        },
        primaryReversed:{
            color: '#1abc9c',
            background: 'white'
        },
        secondary:{
            color: 'white',
            background: '#2C3E50'
        },
        terciary:{
            color: 'white',
            background: '#17A2B8'
        },
        neutral: {
            color: '#2C3E50',
            background: 'white'
        },
        copyright:{
            color: 'white',
            background: '#0F151C'
        }

    },
    second: {
        id: 2,
        primary: {
            color: '#2D2D34',
            background: '#F1E4E8'
        },
        primaryReversed:{
            color: '#F1E4E8',
            background: '#2D2D34'
        },
        secondary:{
            color: 'black',
            background: '#8BCDCD'
        },
        terciary:{
            color: 'black',
            background: '#CEB1BE'
        },
        neutral: {
            color: '#F1E4E8',
            background: '#2D2D34'
        },
        copyright:{
            color: 'black',
            background: '#1A2626'
        }
    },
    third: {
        id: 3,
        primary: {
            color: 'white',
            background: '#af2d2d'
        },
        primaryReversed: {
            color: '#af2d2d',
            background: 'white'
        },
        secondary:{
            color: 'white',
            background: '#214252'
        },
        terciary:{
            color: 'white',
            background: '#f05454'
        },
        neutral: {
            color: '#214252',
            background: 'white'
        },
        copyright:{
            color: 'black',
            background: '#0D1A21'
        }
    },
    fourth: {
        id: 4,
        primary: {
            color: 'black',
            background: '#ccf6c8'
        },
        primaryReversed: {
            color: '#ccf6c8',
            background: 'black'
        },
        secondary:{
            color: 'black',
            background: '#3F9187'
        },
        terciary:{
            color: 'black',
            background: '#f6d6ad'
        },
        neutral: {
            color: 'whitesmoke',
            background: 'black'
        },
        copyright:{
            color: 'black',
            background: '#112826'
        }
        
    },
    fifth: {
        id: 5,
        primary: {
            color: '#f8f1f1',
            background: '#F48529'
        },
        primaryReversed: {
            color: '#F48529',
            background: '#f8f1f1'
        },
        secondary:{
            color: 'white',
            background: '#16697a'
        },
        terciary:{
            color: 'white',
            background: '#DD4600'
        },
        neutral: {
            color: '#16697a',
            background: '#f8f1f1'
        },
        copyright:{
            color: 'white',
            background: '#08272D'
        }
    },
    sixth: {
        id: 6,
        primary: {
            color: '#797a7e',
            background: '#e0ece4'
        },
        primaryReversed: {
            color: '#e0ece4',
            background: '#797a7e'
        },
        secondary:{
            color: '#797a7e',
            background: '#d8d3cd'
        },
        terciary:{
            color: '#797a7e',
            background: '#f7f2e7'
        },
        neutral: {
            color: 'whitesmoke',
            background: '#797a7e'
        },
        copyright:{
            color: '#e0ece4',
            background: '#3B3B3D'
        }
    }
}
const ThemeContext = React.createContext(themes.dark);
export default ThemeContext;