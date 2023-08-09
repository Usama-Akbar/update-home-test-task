import { connect } from "react-redux";
import { getPosts } from "../services/Actions/action";
import Header from "@/pages/components/Header";

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(getPosts(data)),
});

const mapStateToProps = (state) => ({
  posts: state[0],
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
