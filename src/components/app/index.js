import React, { Component } from "react";
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import PostStatusFilter from "../PostStatusFilter";
import PostList from "../PostList";
import PostAddForm from "../PostAddForm";

import "./app.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: "Going to learn react",
          important: true,
          like: false,
          id: "1",
        },
        { label: "That is so good", important: false, id: "2" },
        { label: "break", important: false, id: "3" },
      ],
      term: "",
    };
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLike = this.onToggleLike.bind(this);

    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

      return {
        data: newArr,
      };
    });
  };

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }

  onToggleImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const old = data[index];
      const newItem = { ...old, important: !old.important };

      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return {
        data: newArr,
      };
    });
  }

  onToggleLike(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const old = data[index];
      const newItem = { ...old, like: !old.like };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return {
        data: newArr,
      };
    });
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items;
    }

    items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  }

  render() {
    const { data } = this.state;
    const liked = data.filter((item) => item.like).length;
    const allPosts = data.length;

    return (
      <div className="app">
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList
          posts={this.state.data}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLike={this.onToggleLike}
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
