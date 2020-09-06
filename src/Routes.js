import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Homepage from './Homepage';
import TaskList from './Task/TaskList';
import SettingPage from './Setting/SettingPage';
import DashboardPage from './Dashboard/DashboardPage';

const Router = () => {
  return (
    <Switch>
      <Route path="/transactions">
        <Homepage />
      </Route>
      <Route path="/tasks">
        <TaskList />
      </Route>
      <Route path="/settings">
        <SettingPage />
      </Route>
      <Route path="/dashboard">
        <DashboardPage />
      </Route>
    </Switch>
  )};

export default Router
