const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");
const FormData = require("form-data");
const axios = require("axios");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.advantageonlineshopping.com/catalog/api/v1",
    setupNodeEvents(on, config) {
      on("task", {
        async uploadImage({ userId, source, color, fileName, productId, token }) {
          const filePath = path.resolve("cypress/fixtures", fileName);

          if (!fs.existsSync(filePath)) {
            return {
              status: 404,
              data: `Arquivo não encontrado: ${filePath}`,
            };
          }

          const form = new FormData();
          form.append("file", fs.createReadStream(filePath));

          const url = `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/${source}/${color}?product_id=${productId}`;

          try {
            const response = await axios.post(url, form, {
              headers: {
                Authorization: token,
                ...form.getHeaders()
              },
              maxContentLength: Infinity,
              maxBodyLength: Infinity,
            });

            return { status: response.status, data: response.data };
          } catch (error) {
            return {
              status: error.response?.status || 500,
              data: error.response?.data || error.message,
            };
          }
        }
      });
    }
  }
});
