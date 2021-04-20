/**
 * 参数工具
 */
export default {
  /**
   * 格式化
   * @param param 参数
   */
  format(param) {
    if (!param) return {};
    let dParam = "";
    Object.keys(param).forEach(function(key) {
      if (key.substring(0, 1) == "_") {
        let dKey = key.substring(1, key.length);
        dParam += dKey + "=" + param[key] + "&";
      } else {
        dParam += dKey + "=" + param[key] + "&";
      }
    });
    return dParam;
  }
};
