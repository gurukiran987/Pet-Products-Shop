import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../actions'
import { addProduct } from '../../actions/product.action'
import Layout from '../../components/Layout'
import Input from '../../UI/Input_helping'
import Modal from '../../UI/modal'

/**
* @author
* @function Products
**/




const Products = (props) => {

  // Create states
  const category = useSelector(state => state.category)
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [productPictures, setProductPictures] = useState([])
  const [show, setShow] = useState(false)
  const product = useSelector(state => state.product)

  const dispatch = useDispatch();

  const handleClose = () => {
    const form = new FormData();

    form.append('name', name)
    form.append('quantity', quantity)
    form.append('price', price)
    form.append('description', description)
    form.append('category', categoryId)

    for (let pic of productPictures) {
      form.append('productPicture', pic)
    }
    dispatch(addProduct(form));
    setShow(false);
  }

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);



  const handleShow = () => setShow(true);

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options)
      }
    }
    return options;
  }

  const handleProductPicture = (e) => {
    setProductPictures([
      ...productPictures,
      e.target.files[0]
    ])
  }

  console.log(product.products)
  console.log('nice')

  const renderProducts = () => {
    return (
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>price</th>
            <th>Stock</th>
            <th>Description</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {
            product.products.length > 0 ?
              product.products.map(product => 
              <tr key = {product._id}>
                <td>3</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.description}</td>
                <td>--</td>
              </tr>) : null
          }

        </tbody>
      </Table>
    )
  }



  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>Products</h3>
              <button onClick={handleShow}>Add</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {renderProducts()}
          </Col>
        </Row>
      </Container>
      <Modal
        show={show}
        handleClose={handleClose}
        modalTitle={'Add New Product'}
      >
        <Input
          label="name"
          value={name}
          placeholder={`Product Name`}
          OnChange={(event) => setName(event.target.value)}
        />
        <Input
          label="quantity"
          value={quantity}
          placeholder={`Quantity`}
          OnChange={(event) => setQuantity(event.target.value)}
        />
        <Input
          label="price"
          value={price}
          placeholder={`Price`}
          OnChange={(event) => setPrice(event.target.value)}
        />
        <Input
          label="description"
          value={description}
          placeholder={`Description`}
          OnChange={(event) => setDescription(event.target.value)}
        />
        <select className="form-control" value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
          <option>Select Category</option>
          {
            createCategoryList(category.categories).map(option =>
              <option key={option.value} value={option.value}>{option.name}</option>)
          }
        </select>

        {
          productPictures.length > 0 ?
            productPictures.map((pic, index) => <div key={index}>{pic.name}</div>) : null
        }

        <input type="file" name="productPicture" onChange={handleProductPicture} />
      </Modal>
    </Layout>
  )

}

export default Products