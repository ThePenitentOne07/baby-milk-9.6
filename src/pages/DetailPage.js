// // src/pages/DetailPage.js
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Box, Typography, CardContent, CardMedia, CircularProgress } from '@mui/material';
// import apiService from '../app/apiService';
// import { Alert, Card, Divider, Grid, Stack, Rating } from '@mui/material';
// import LoadingScreen from '../components/LoadingScreen';
// // import { fCurrency } from '../utils';
// import { Container, Breadcrumbs, Link } from '@mui/material';
// import { Link as RouterLink } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';
// // import remarkGfm from 'remark-gfm';
// import rehypeRaw from 'rehype-raw';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Alert, Card, Divider, Grid, Stack, Rating, Container, Breadcrumbs, Link, Button, IconButton, TextField } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Add, Remove } from '@mui/icons-material';
import apiService from '../app/apiService';
import LoadingScreen from '../components/LoadingScreen';

function DetailPage() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentImage, setCurrentImage] = useState("");
    const params = useParams();
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        if (params.id) {
            const getProduct = async () => {
                setLoading(true);
                try {
                    const res = await apiService.get(`/products/${params.id}`);
                    setProduct(res.data);
                    setCurrentImage(res.data.cover); // Set the initial image
                    setError(null);
                } catch (error) {
                    console.log(error);
                    setError(error.message);
                }
                setLoading(false);
            };
            getProduct();
        }
    }, [params]);

    const handleImageClick = (image) => {
        setCurrentImage(image);
    };
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleIncreaseQuantity = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, 99));
    };

    const handleDecreaseQuantity = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    };

    const handleAddToCart = () => {
        // Logic for adding to cart
        console.log("Added to cart:", { product, quantity });
    };

    const handleBuyNow = () => {
        // Logic for buying now
        console.log("Buy now:", { product, quantity });
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <Alert severity="error">{error}</Alert>
            </Box>
        );
    }

    return (
        <Container sx={{ my: 3 }}>
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
                <Link underline="hover" color="inherit" component={RouterLink} to="/">
                    CoderStore
                </Link>
                <Typography color="text.primary">{product?.name}</Typography>
            </Breadcrumbs>
            <Box sx={{ position: "relative", height: 1 }}>
                {loading ? (
                    <LoadingScreen />
                ) : (
                    <>
                        {error ? (
                            <Alert severity="error">{error}</Alert>
                        ) : (
                            <>
                                {product && (
                                    <Card>
                                        <Grid container>
                                            <Grid item xs={12} md={6}>
                                                <Box p={2}>
                                                    <Box
                                                        sx={{
                                                            borderRadius: 2,
                                                            overflow: "hidden",
                                                            display: "flex",
                                                            justifyContent: "center"
                                                        }}
                                                    >
                                                        <Box
                                                            component="img"
                                                            sx={{
                                                                width: 1,
                                                                height: 1,
                                                            }}
                                                            src={currentImage}
                                                            alt="product"
                                                        />
                                                    </Box>
                                                    <Stack direction="row" spacing={2} mt={2} justifyContent="center">
                                                        {product.images && product.images.slice(0, 3).map((image, index) => (
                                                            <Box
                                                                key={index}
                                                                component="img"
                                                                src={image}
                                                                alt={`product-${index}`}
                                                                sx={{
                                                                    width: 80,
                                                                    height: 80,
                                                                    borderRadius: 1,
                                                                    cursor: "pointer",
                                                                    border: currentImage === image ? '2px solid' : 'none'
                                                                }}
                                                                onClick={() => handleImageClick(image)}
                                                            />
                                                        ))}
                                                    </Stack>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        mt: 2,
                                                        mb: 1,
                                                        display: "block",
                                                        textTransform: "uppercase",
                                                        color:
                                                            product.status === "sale"
                                                                ? "error.main"
                                                                : "info.main",
                                                    }}
                                                >
                                                    {product.status}
                                                </Typography>
                                                <Typography variant="h5" paragraph>
                                                    {product.name}
                                                </Typography>
                                                <Stack
                                                    direction="row"
                                                    alignItems="center"
                                                    spacing={1}
                                                    sx={{ mb: 2 }}
                                                >
                                                    <Rating
                                                        value={product.totalRating}
                                                        precision={0.1}
                                                        readOnly
                                                    />
                                                    <Typography
                                                        variant="body2"
                                                        sx={{ color: "text.secondary" }}
                                                    >
                                                        ({product.totalReview} reviews)
                                                    </Typography>
                                                </Stack>
                                                <Typography variant="h4" sx={{ mb: 3 }}>
                                                    <Box
                                                        component="span"
                                                        sx={{
                                                            color: "text.disabled",
                                                            textDecoration: "line-through",
                                                        }}
                                                    >
                                                        {/* {product.priceSale && fCurrency(product.priceSale)} */} {product.priceSale}
                                                    </Box>
                                                    &nbsp;{product.price}
                                                </Typography>

                                                <Divider sx={{ borderStyle: "dashed" }} />
                                                <Box>
                                                    <ReactMarkdown
                                                        rehypePlugins={[rehypeRaw]}
                                                        children={product.description}
                                                    />
                                                </Box>

                                                <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 3 }}>
                                                    <IconButton onClick={handleDecreaseQuantity}>
                                                        <Remove />
                                                    </IconButton>
                                                    <TextField
                                                        type="number"
                                                        value={quantity}
                                                        onChange={handleQuantityChange}
                                                        inputProps={{
                                                            min: 1,
                                                            max: 99,
                                                            style: { textAlign: 'center' },
                                                        }}
                                                        sx={{ width: 60 }}
                                                    />
                                                    <IconButton onClick={handleIncreaseQuantity}>
                                                        <Add />
                                                    </IconButton>
                                                </Stack>
                                                <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                                                    <Button variant="contained" color="primary" onClick={handleAddToCart}>
                                                        Add to Cart
                                                    </Button>
                                                    <Button variant="contained" color="secondary" onClick={handleBuyNow}>
                                                        Buy Now
                                                    </Button>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                )}
                                {!product && (
                                    <Typography variant="h6">404 Product not found</Typography>
                                )}
                            </>
                        )}
                    </>
                )}
            </Box>
        </Container>
    );
}

export default DetailPage;
