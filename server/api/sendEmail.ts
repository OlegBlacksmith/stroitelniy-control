// server/api/sendEmail.ts
import { sendEmailController } from '../controllers/sendEmailController';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { email, emailType }: { email: any; emailType: 'order' | 'partner' } = body;
    
    const result = await sendEmailController(email, emailType);
    return result;
  } catch (error) {
    console.error('API Error:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error'
    });
  }
});

