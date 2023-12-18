import { validateEmail } from '../validation/email';
import { IUserDTO } from './dto/user.dto';
import { userRepository } from './repository/users.repository';

export interface IValidationResult {
  isValid: boolean;
  message: string;
}
export const UserService = {
  async validationUser(data: IUserDTO): Promise<IValidationResult> {
    const user = await userRepository.findByEmail(data.email);
    if (data.name == null || data.name == '') {
      return { isValid: false, message: 'Nome não pode estar vazio!' };
    } else if (data.email == null || data.email == '') {
      return { isValid: false, message: 'Email não pode estar vazio!' };
    } else if (data.password == null || data.password == '') {
      return { isValid: false, message: 'Senha não pode estar vazia!' };
    } else if (!validateEmail(data.email)) {
      return { isValid: false, message: 'Adicione um Email Válido!' };
    } else if (user) {
      return { isValid: false, message: 'Este Email Ja se encontra Cadatrado' };
    } else {
      return { isValid: true, message: 'Dados válidos!' };
    }
  },
};
