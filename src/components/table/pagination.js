import React from 'react';
import './pagination.scss';
import ReactPaginate from 'react-paginate';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    }
  }

  handleState(e) {
    this.props.handleFullSize(e)
  }
  handlePageClick(e) {
    const page = e.selected;
    this.props.handlePagination(page);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.data.from !== nextProps.data.from) {
      this.setState({
        data: this.props.data
      })
    }
  }

  render() {
    return (
      <div className="с-pagination">
        <div className="с-pagination-result">
          <span>
            {this.state.data.from} - {this.state.data.size} of {this.state.data.count}
          </span>
        </div>
        <div className="с-pagination-wrapper">
          <ReactPaginate 
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={50}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={ e => this.handlePageClick(e) }
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>

        <div className="с-pagination-size">
          <span>
            { this.props.isFullSize ? 'minimize' : 'maximize'}
          </span>
          {
            this.props.isFullSize 
            ? 
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" onClick={e => this.handleState(e) }>
              <rect opacity="0.7" width="28" height="28" fill="#0788FF"/>
              <path d="M7.25 15.5C7.25 15.0858 7.58579 14.75 8 14.75H12.5C12.9142 14.75 13.25 15.0858 13.25 15.5V20C13.25 20.4142 12.9142 20.75 12.5 20.75C12.0858 20.75 11.75 20.4142 11.75 20V16.25H8C7.58579 16.25 7.25 15.9142 7.25 15.5Z" fill="white"/>
              <path d="M15.5 7.25C15.9142 7.25 16.25 7.58579 16.25 8V11.75H20C20.4142 11.75 20.75 12.0858 20.75 12.5C20.75 12.9142 20.4142 13.25 20 13.25H15.5C15.0858 13.25 14.75 12.9142 14.75 12.5V8C14.75 7.58579 15.0858 7.25 15.5 7.25Z" fill="white"/>
              <path d="M21.2803 6.71967C21.5732 7.01256 21.5732 7.48744 21.2803 7.78033L16.0303 13.0303C15.7374 13.3232 15.2626 13.3232 14.9697 13.0303C14.6768 12.7374 14.6768 12.2626 14.9697 11.9697L20.2197 6.71967C20.5126 6.42678 20.9874 6.42678 21.2803 6.71967Z" fill="white"/>
              <path d="M13.0303 14.9697C13.3232 15.2626 13.3232 15.7374 13.0303 16.0303L7.78033 21.2803C7.48744 21.5732 7.01256 21.5732 6.71967 21.2803C6.42678 20.9874 6.42678 20.5126 6.71967 20.2197L11.9697 14.9697C12.2626 14.6768 12.7374 14.6768 13.0303 14.9697Z" fill="white"/>
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"  onClick={e => this.handleState(e) }>
              <rect opacity="0.7" width="28" height="28" fill="#0788FF"/>
              <path d="M15.5 7.25C15.5 6.83579 15.8358 6.5 16.25 6.5H20.75C21.1642 6.5 21.5 6.83579 21.5 7.25V11.75C21.5 12.1642 21.1642 12.5 20.75 12.5C20.3358 12.5 20 12.1642 20 11.75V8H16.25C15.8358 8 15.5 7.66421 15.5 7.25Z" fill="white"/>
              <path d="M7.25 15.5C7.66421 15.5 8 15.8358 8 16.25V20H11.75C12.1642 20 12.5 20.3358 12.5 20.75C12.5 21.1642 12.1642 21.5 11.75 21.5H7.25C6.83579 21.5 6.5 21.1642 6.5 20.75V16.25C6.5 15.8358 6.83579 15.5 7.25 15.5Z" fill="white"/>
              <path d="M21.2803 6.71967C21.5732 7.01256 21.5732 7.48744 21.2803 7.78033L16.0303 13.0303C15.7374 13.3232 15.2626 13.3232 14.9697 13.0303C14.6768 12.7374 14.6768 12.2626 14.9697 11.9697L20.2197 6.71967C20.5126 6.42678 20.9874 6.42678 21.2803 6.71967Z" fill="white"/>
              <path d="M13.0303 14.9697C13.3232 15.2626 13.3232 15.7374 13.0303 16.0303L7.78033 21.2803C7.48744 21.5732 7.01256 21.5732 6.71967 21.2803C6.42678 20.9874 6.42678 20.5126 6.71967 20.2197L11.9697 14.9697C12.2626 14.6768 12.7374 14.6768 13.0303 14.9697Z" fill="white"/>
            </svg>
          }
        </div>
      </div>
    );
  }
}
export default Pagination