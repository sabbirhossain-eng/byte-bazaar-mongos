import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import img from "../../assets/img1.png";

const ProductCard = () => {
  
  return (
    <Card 
    sx={{ maxWidth: 345 }}
    className="relative"
    >
      <Typography className="bg-primary text-white rounded-r-md absolute left-0 top-4 pr-4 pl-2">
      Save: 100$
      </Typography>
      <CardMedia
      className="mt-12"
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
      />
      <hr className="mt-4 py-[1px] bg-slate-200" />
      <CardContent>
        
        <Typography className="hover:text-secondary">
        MSI Modern 15 B7M Ryzen 5 7530U 16GB RAM 15.6 inc FHD Laptop
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
