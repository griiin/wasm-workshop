#![feature(wasm_import_memory)]
#![wasm_import_memory]
use std::ffi::CString;

extern "C" {
  fn change_html_value(_:i32, _:usize);
}

#[no_mangle]
pub unsafe extern "C" fn hello_world() -> i32 {
  let string = "Hello world! (From rust)";
  let size = string.len();
  let s = CString::new(string).unwrap();
  let pos = s.into_raw() as i32;
  change_html_value(pos, size);
  pos
}


fn main() {
}
