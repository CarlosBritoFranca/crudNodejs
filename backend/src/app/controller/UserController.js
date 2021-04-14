import User from "../models/User";

class UserController {
  async index(req, res) {
    return res.status(200).json({ ok: true });
  }

  async store(req, res) {
    const userExist = await User.findOne({
      where: { email: req.body.email }
    });
    if (userExist) {
      return res.status(400).json({ error: "Email já Cadastrado !!!" });
    }
    const user = await User.create(req.body);
    return res.status(200).json(user);
  }

  async show(req, res) {
    return res.status(200).json({ ok: true });
  }
  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExist = await User.findOne({
        where: { email }
      });
      if (userExist) {
        return res.status(400).json({ error: "Email já Cadastrado !!!" });
      }
    }
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res
        .status(401)
        .json({ error: "Senha informada não esta cadastrada!!!" });
    }

    const userNew = await user.update(req.body);

    return res.status(200).json(userNew);
  }
  async delete(req, res) {
    return res.status(200).json({ ok: true });
  }
}

export default new UserController();
