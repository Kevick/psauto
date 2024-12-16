import { createClient } from '@supabase/supabase-js';

// Obtendo os valores das variáveis de ambiente
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

// Criando o cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);

// Exportando a URL do Supabase (caso necessário)
export { supabaseUrl };


