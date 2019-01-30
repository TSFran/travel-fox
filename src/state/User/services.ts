import axios from 'axios';

// export class serviceUsers {
//   static get() {
//     let data = axios.get(
//       'http://www.json-generator.com/api/json/get/coUasnYreG?indent=2'
//     );
//     return data;
//   }
// }

export const serviceUsers = {
  async getUsers() {
    try {
      const { data } = await axios.get(
        'http://www.json-generator.com/api/json/get/coUasnYreG?indent=2'
      );
      return data;
    } catch (e) {
      throw new Error();
    }
  }
};
