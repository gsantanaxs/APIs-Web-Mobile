const { createClient } = require('@supabase/supase-js');
require ('dotenv').config();
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('SUPABASE_URL OU SUPABASE_KEY não foi encontrado no .env')
}

const supabase = createClient(supabaseURL ,supabaseKey);
module.exports = supabase