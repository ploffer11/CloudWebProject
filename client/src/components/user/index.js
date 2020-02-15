import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class index extends Component {
  render() {
    let rowStyle = {
      margin: 0,
    };
    let sidebarStyle = {
      minHeight: '100vh',
    };
    let dividerStyle = {
      margin: 0,
    };
    let linkStyle = {
      margin: 0,
      padding: 0,
    };
    let h5Style = {
      padding: '20px 0 20px 0',
      margin: 0,
    };
    let h6Style = {
      padding: '12px 0 12px 0',
      margin: 0,
    };
    return (
      <div>
        <div class="row" style={rowStyle}>
          <div class="col s2 red accent-2 white-text" style={sidebarStyle}>
            <h5 style={h5Style}>Share Your Slide</h5>

            <div class="divider" style={dividerStyle}></div>
            <div class="sidebar-link">
              <Link to="/" class="white-text" style={linkStyle}>
                <h6 style={h6Style}>My cloud</h6>
              </Link>
              <div class="divider" style={dividerStyle}></div>
            </div>

            <div class="sidebar-link">
              <Link to="/" class="white-text" style={linkStyle}>
                <h6 style={h6Style}>My cloud</h6>
              </Link>
              <div class="divider" style={dividerStyle}></div>
            </div>

            <div class="sidebar-link">
              <Link to="/" class="white-text" style={linkStyle}>
                <h6 style={h6Style}>My cloud</h6>
              </Link>
              <div class="divider" style={dividerStyle}></div>
            </div>
          </div>

          <div class="col s8"></div>
          <div class="col s2">Hi!</div>

          <div class="col s10">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              rem possimus, aut sit sint fugit dolorem sunt facere modi aliquid,
              repellat molestias, iusto aperiam natus quos nisi. Quisquam, rem
              ratione.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              rem possimus, aut sit sint fugit dolorem sunt facere modi aliquid,
              repellat molestias, iusto aperiam natus quos nisi. Quisquam, rem
              ratione Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Tempore, labore voluptates voluptatum sequi molestias vitae,
              deleniti hic nemo nam delectus magni neque sed dignissimos tempora
              rem veniam fuga iste. Aliquam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Consequatur accusamus quisquam
              tempora hic. Deleniti quibusdam, corporis, odit, earum est debitis
              fugit officia voluptate at iste dicta molestiae eligendi minus et!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              rem possimus, aut sit sint fugit dolorem sunt facere modi aliquid,
              repellat molestias, iusto aperiam natus quos nisi. Quisquam, rem
              ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae dignissimos porro reiciendis accusantium quisquam
              maxime soluta ducimus architecto dolor iste, totam beatae nam rem
              eveniet corporis perferendis autem animi. Cupiditate.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              rem possimus, aut sit sint fugit dolorem sunt facere modi aliquid,
              repellat molestias, iusto aperiam natus quos nisi. Quisquam, rem
              ratione.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              rem possimus, aut sit sint fugit dolorem sunt facere modi aliquid,
              repellat molestias, iusto aperiam natus quos nisi. Quisquam, rem
              ratione.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
