import React from 'react';
import './pagination.scss';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pages: [
        
      ]
    }
  }

  handleState(e) {
    this.props.handleFullSize(e)
  }
  handleArrows(e) {

  }

  
  render() {
    return (
      <div className="pagination">
        <div className="pagination-result">
          <span>
            1 - 20 of 346
          </span>
        </div>
        <div className="pagination-wrapper">
          <div className="pagination-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
              <path d="M17.7071 8.25102C18.0976 8.58576 18.0976 9.12847 17.7071 9.4632L12.4142 14L17.7071 18.5367C18.0976 18.8715 18.0976 19.4142 17.7071 19.7489C17.3166 20.0837 16.6834 20.0837 16.2929 19.7489L10.2929 14.6061C9.90237 14.2713 9.90237 13.7286 10.2929 13.3939L16.2929 8.25102C16.6834 7.91629 17.3166 7.91629 17.7071 8.25102Z" fill="#F4F4F5"/>
            </svg>
          </div>
          <div className="pagination-field">

            <span className="pagination-field-item">1</span>
            <span className="pagination-field-item">2</span>
            <span className="pagination-field-item">3</span>

          </div>
          <div className="pagination-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
              <path d="M10.2929 8.25111C10.6834 7.91638 11.3166 7.91638 11.7071 8.25111L17.7071 13.394C18.0976 13.7287 18.0976 14.2714 17.7071 14.6062L11.7071 19.749C11.3166 20.0837 10.6834 20.0837 10.2929 19.749C9.90237 19.4143 9.90237 18.8716 10.2929 18.5368L15.5858 14.0001L10.2929 9.4633C9.90237 9.12856 9.90237 8.58585 10.2929 8.25111Z" fill="#F4F4F5"/>
            </svg>
          </div>
        </div>
        <div className="pagination-size">
          <span>
            { this.props.isFullSize ? 'minimize' : 'maximize'}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"  onClick={e => this.handleState(e) }>
            <rect opacity="0.7" width="28" height="28" fill="#0788FF"/>
            <path d="M15.5 7.25C15.5 6.83579 15.8358 6.5 16.25 6.5H20.75C21.1642 6.5 21.5 6.83579 21.5 7.25V11.75C21.5 12.1642 21.1642 12.5 20.75 12.5C20.3358 12.5 20 12.1642 20 11.75V8H16.25C15.8358 8 15.5 7.66421 15.5 7.25Z" fill="white"/>
            <path d="M7.25 15.5C7.66421 15.5 8 15.8358 8 16.25V20H11.75C12.1642 20 12.5 20.3358 12.5 20.75C12.5 21.1642 12.1642 21.5 11.75 21.5H7.25C6.83579 21.5 6.5 21.1642 6.5 20.75V16.25C6.5 15.8358 6.83579 15.5 7.25 15.5Z" fill="white"/>
            <path d="M21.2803 6.71967C21.5732 7.01256 21.5732 7.48744 21.2803 7.78033L16.0303 13.0303C15.7374 13.3232 15.2626 13.3232 14.9697 13.0303C14.6768 12.7374 14.6768 12.2626 14.9697 11.9697L20.2197 6.71967C20.5126 6.42678 20.9874 6.42678 21.2803 6.71967Z" fill="white"/>
            <path d="M13.0303 14.9697C13.3232 15.2626 13.3232 15.7374 13.0303 16.0303L7.78033 21.2803C7.48744 21.5732 7.01256 21.5732 6.71967 21.2803C6.42678 20.9874 6.42678 20.5126 6.71967 20.2197L11.9697 14.9697C12.2626 14.6768 12.7374 14.6768 13.0303 14.9697Z" fill="white"/>
          </svg>
        </div>
      </div>
    );
  }
}
export default Pagination