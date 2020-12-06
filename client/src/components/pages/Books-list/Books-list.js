import React, { Component } from 'react'

import BooksService from '../../../service/books.service'

import BookCard from './Book-card'
//import Loader from './../../shared/Spinner/Loader'
//import CoasterForm from './../Coaster-form/Coaster-form'

import { Container, Row } from 'react-bootstrap'


import './Book-list.css'

class BookList extends Component {

    constructor() {
        super()
        this.state = {
            books: undefined
            //showModal: false
        }
        this.booksService = new BooksService()
    }

    componentDidMount = () => this.refreshBooks()

    refreshBooks = () => {
        this.booksService
            .getBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err))
    }

    //handleModal = visible => this.setState({ showModal: visible })

    render() {
        return (
            <>
                <Container>

                    <h1>Listado de libros</h1>

                    {/* {this.props.loggedUser && <Button onClick={() => this.handleModal(true)} variant="dark" size="sm">Crear nueva montaña rusa</Button>} */}

                    <Row>
                        {
                            this.state.books
                                ?
                                this.state.books.map(elm => <BookCard key={elm._id} {...elm} />)
                                :
                                //    <Loader /> loggedUser={this.props.loggedUser}
                                <h1>error</h1>
                        }
                    </Row>

                </Container>


                {/* <Modal show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <CoasterForm closeModal={() => this.handleModal(false)} updateList={this.refreshCoasters} loggedUser={this.props.loggedUser} />
                    </Modal.Body>
                </Modal> */}

            </>
        )
    }
}

export default BookList 