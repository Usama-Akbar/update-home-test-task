import { connect } from "react-redux";
import { getPosts } from "../services/Actions/action";
import Posts from "@/pages/components/PostsComponent";

const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => ({
  posts: state[0]?.posts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
