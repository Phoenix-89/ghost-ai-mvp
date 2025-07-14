const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function uploadFile(path, file) {
  const { data, error } = await supabase.storage.from('ghost-files').upload(path, file);
  if (error) throw new Error(error.message);
  return data;
}

module.exports = { uploadFile };