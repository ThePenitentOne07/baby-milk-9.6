import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
const defaultTheme = createTheme();

const products = [
  { id: 1, name: "Product #1", image: "path/to/image1.jpg", description: "Description for product #1", quantity: 10, price: 100 },
  { id: 2, name: "Product #2", image: "path/to/image2.jpg", description: "Description for product #2", quantity: 20, price: 100 },
  { id: 3, name: "Product #3", image: "path/to/image3.jpg", description: "Description for product #3", quantity: 30, price: 100 },
  { id: 4, name: "Product #4", image: "path/to/image4.jpg", description: "Description for product #4", quantity: 40, price: 100 },
  { id: 5, name: "Product #5", image: "path/to/image5.jpg", description: "Description for product #5", quantity: 50, price: 100 },
  { id: 6, name: "Product #6", image: "path/to/image6.jpg", description: "Description for product #6", quantity: 60, price: 100 },
];

function MediaCard({ product, onUpdate }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onUpdate(product)}>Update product</Button>
        <Button size="small">Remove product</Button>
      </CardActions>
    </Card>
  );
}

function ProductUpdateModal({ open, onClose, product, onSave }) {
  const [name, setName] = useState(product?.name || '');
  const [quantity, setQuantity] = useState(product?.quantity || 0);
  const [description, setDescription] = useState(product?.description || '');
  const [price, setPrice] = useState(product?.price || 0);

  const handleNameChange = (event) => setName(event.target.value);
  const handleQuantityChange = (event) => setQuantity(event.target.value);
  const handleDescriptionChange = (content) => setDescription(content);
  const handlePriceChange = (event) => setPrice(event.target.value);

  const handleSubmit = () => {
    onSave({ id: product?.id, name, quantity, description, price });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{product ? 'Update Product' : 'Add Product'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {product ? 'Update the details of the product below.' : 'Enter the details of the new product below.'}
        </DialogContentText>
        <TextField
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          margin="dense"
          label="Quantity"
          type="number"
          fullWidth
          value={quantity}
          onChange={handleQuantityChange}
        />
        <ReactQuill
          theme="snow"
          value={description}
          onChange={handleDescriptionChange}
        />
        <TextField
          margin="dense"
          label="Price"
          type="number"
          fullWidth
          value={price}
          onChange={handlePriceChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>
          {product ? 'Update' : 'Add'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function ProductList() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleUpdateClick = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleAddClick = () => {
    setSelectedProduct(null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleSave = (product) => {
    // Save the product (add to the list or update existing product)
    console.log('Saved product:', product);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography component="h1" variant="h4" color="inherit" noWrap sx={{ flexGrow: 1, mb: 4 }}>
              Product List
            </Typography>
            <Button variant="contained" color="primary" sx={{ mb: 4 }} onClick={handleAddClick}>
              Add Product
            </Button>
            <Grid container spacing={3}>
              {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <MediaCard product={product} onUpdate={handleUpdateClick} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
      <ProductUpdateModal
        open={open}
        onClose={handleClose}
        product={selectedProduct}
        onSave={handleSave}
      />
    </ThemeProvider>
  );
}
