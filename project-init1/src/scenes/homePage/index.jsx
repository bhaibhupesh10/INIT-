import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import CompanyListWidget from "scenes/widgets/CompanyListWidget";
import Footer from "pages/miniComponents/Footer";

const HomePage = () => {
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <>
      <Navbar />
    <Box>
      <Box
        width="100%"
        padding="2rem 6%"
        display="flex"
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis="26%">
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box flexBasis="42%">
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        <Box flexBasis="26%">
          <AdvertWidget />
          <Box m="2rem 0" />
          <CompanyListWidget userId={_id} />
        </Box>
      </Box>
    </Box>
    <Footer />
    </>
    
  );
};

export default HomePage;
