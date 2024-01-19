// @ts-check

import { screenshot } from './screenshot.mjs';

/**
 * @param {import('aws-lambda').APIGatewayEvent} event
 * @returns {Promise<import('aws-lambda').APIGatewayProxyResult>}
 */
export const handler = async (event) => {
  const url = event.queryStringParameters?.url;

  if (!url) {
    const message = 'URL parameter is required.';
    console.error(message);
    return {
      statusCode: 400,
      body: message,
    };
  }

  try {
    const body = await screenshot(url);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'image/png',
      },
      body,
      isBase64Encoded: true,
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: error.toString(),
    };
  }
};
