// server/api/sendEmail.ts
import Email from '~~/shared/models/Email.model';
import { sendEmailController } from '../controllers/sendEmailController';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { email, emailType }: { email: Email; emailType: 'order' | 'partner' } = body;
    
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

