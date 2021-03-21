import router from '../router';
import bookHandler from "../../handlers/bookHandler";

router.route('/books/list')
    .get(bookHandler)

export default router;
