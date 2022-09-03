import { Close, Search, ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { getdata } from "../mock/albums-mock";
import { Album } from "../models/Album";

const SearchPage = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadded, setIsLoaded] = useState(false);

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setSearchText(event.target.value);
  };

  useEffect(() => {
    if (!searchText) {
      setAlbums((state) => []);
    }
  }, [searchText]);

  const resetSearchText = () => {
    setSearchText("");
  };

  const search = () => {
    setIsLoading(true);
    getdata()
      .then((data) => {
        setAlbums(data);
      })
      .finally(() => setIsLoading(false));
  };

  const Logo = ({ text }: { text?: string }) => {
    return (
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        {text}
      </Typography>
    );
  };

  const ShoppingCartWithBadge = () => {
    return (
      <Box sx={{ display: "flex", flex: 1, justifyContent: "end" }}>
        <IconButton sx={{ color: "white" }}>
          <Badge badgeContent={199} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Box>
    );
  };

  const AlbumCard = ({ album }: { album: Album }) => {
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={album.coverUrl}
            alt="Album Image"
          />
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
            }}
          >
            <Typography gutterBottom variant="h6" color="text.seconday">
              {album.title}
            </Typography>
            <Typography gutterBottom variant="h6" color="text.seconday">
              {album.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            size="small"
            sx={{
              color: "white",
              fontWeight: "bold",
              backgroundColor: "green",
            }}
          >
            Ajouter
          </Button>
        </CardActions>
      </Card>
    );
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Logo text="APPLE" />
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              widht: 400,
              borderRadius: "1.75rem",
              borderColor: "lightgray",
              color: "lightgray",
              backgroundColor: "white",
              flex: 1 / 2,
            }}
          >
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                color: "gray",
              }}
              placeholder="Recherche"
              inputProps={{ "aria-label": "Recherche" }}
              value={searchText}
              onChange={handleSearchTextChange}
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="Réinitialiser"
              onClick={resetSearchText}
              disabled={!searchText}
            >
              <Close />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="Rechercher"
              onClick={search}
              disabled={!searchText}
            >
              <Search />
            </IconButton>
          </Paper>
          <ShoppingCartWithBadge />
        </Toolbar>
      </AppBar>
      <Divider sx={{ my: 1, color: "red" }} orientation="horizontal" />
      <Grid container spacing={2}>
        {isLoading && (
          <Grid item xs={12}>
            <CircularProgress color="primary" />
          </Grid>
        )}
        {albums && albums.length > 0
          ? albums.map((album) => (
              <Grid item xs={2}>
                <AlbumCard key={album.id} album={album} />
              </Grid>
            ))
          : !isLoading && (
              <Grid item xs={12}>
                <Typography variant="h2">No items found!</Typography>
              </Grid>
            )}
      </Grid>
    </Box>
  );
};

export default SearchPage;
