import { Router } from "express";
import { routerArticle } from "./article.route.js";
import { routerComment } from "./comment.route.js";
import { routerTag } from "./tag.route.js";
import { routerUser } from "./user.route.js";
import routerAuth from "./auth.route.js";

const router = Router();

router.use(routerArticle);
router.use(routerComment);
router.use(routerTag);
router.use(routerUser);
router.use(routerAuth);

export default router;
