import { Router } from 'express';
import * as subController from '../controllers/subscription.controller.js';
import authorize from '../middleware/auth.middleware.js';

const subscriptionRouter = Router();

subscriptionRouter.get( '/', subController.getSubscriptions);

subscriptionRouter.get( '/upcoming-renewals', subController.getUpcomingRenewals);

subscriptionRouter.get( '/:id', authorize, subController.getSubscriptionById);

subscriptionRouter.post( '/', authorize, subController.createSubscription);

subscriptionRouter.put( '/:id', authorize, subController.updateSubscription);

subscriptionRouter.delete( '/:id', authorize, subController.deleteSubscription);

subscriptionRouter.get( '/user/:id', authorize, subController.getUserSubscriptions);

subscriptionRouter.put( '/:id/cancel', subController.cancelSubscription);

export default subscriptionRouter;