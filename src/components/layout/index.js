import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../header';
import Footer from '../footer';
import ErrorHandler from '../error-handler';
import '../../styles/tailwind.generated.css';

export default function withLayout(Component) {
  const Layout = (props) => {
    const getLayout = () => (
      <div className="w-screen">
        <ErrorHandler>
          <Header {...props} />
        </ErrorHandler>
        <div className="container mx-auto">
          <ErrorHandler>
            <Component {...props} />
          </ErrorHandler>
        </div>
        <ErrorHandler>
          <Footer {...props} />
        </ErrorHandler>
      </div>
    );
    return getLayout();
  };
  const mapStateToProps = () => ({});
  const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);
  return connect(mapStateToProps, mapDispatchToProps)(Layout);
}
