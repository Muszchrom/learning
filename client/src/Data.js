const apiBaseUrl = {
  apiBaseUrl: 'http://localhost:5000/api',
};

export default class Data {
  api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
    const url = apiBaseUrl.apiBaseUrl + path;
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    // Check if auth is required
    if (requiresAuth) {
      options.headers['Authorization'] = `${credentials.email}:${credentials.password}`;
    }

    return fetch(url, options);
  }

  async getUser(email, password) {
    const response = await this.api(`/users`, 'GET', null, true, { email, password });
    if (response.status === 200) {
      return response.json(); // .then(data => data)
    }
    else if (response.status === 401) {
      return null;
    }
    else {
      throw new Error();
    }
  }

  async createUser(user) {
    const response = await this.api('/users', 'POST', user);
    if (response.status === 201) {
      return [];
    }
    else if (response.status === 400) {
      return response.json().then(data => {
        return data.errors;
      });
    }
    else {
      throw new Error();
    }
  }
//minecraft-progress-bar
  async getMinecrtaftProgressBar() {
    const response = await this.api('/minecraft-progress-bar', 'GET');
    if (response.status === 200) {
      return response.json().then(data => data); //.json().then(data => data)
    }
    else if (response.status === 401) {
      return null;
    }
    else {
      throw new Error();
    }
  }
}
