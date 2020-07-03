import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import ImageDetailView from './component';

import {
  setError, setImageURL, setCroppedImageDetails, uploadImageToCloud,
} from '../uploader/action';

const mapStateToProps = (state) => ({
  error: state.image.error,
  imageUrl: state.image.imageURL,
  imageDetails: state.image.imageDetails,
  downloadReady: state.image.downloadReady,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setError,
    setImageURL,
    setCroppedImageDetails,
    uploadImageToCloud,
  },
  dispatch,
);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ImageDetailView),
);
