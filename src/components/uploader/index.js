import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Uploader from './component';

import { setError, setImageURL, setImages } from './action';

const mapStateToProps = (state) => ({
  imageUrl: state.image.imageUrl,
  error: state.image.error,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setError,
    setImageURL,
    setImages,
  },
  dispatch,
);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Uploader),
);
