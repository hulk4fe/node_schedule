const time = false
const cmd = true

module.exports = {
    time: time ? '1 * * * * *' : '8 * * *',
      cmds: cmd ? [
        'python3 /root/myProject/myItchat/stock_analysis/data_filter.py filter_dby',
        'python3 /root/myProject/myItchat/stock_analysis/data_filter.py guider',
        'python3 /root/myProject/myItchat/stock_analysis/data_filter.py guider_dby'
    ] : [
        "sf",
        "gd",
        "gc"
    ],
      desc: ["今日推荐: ", "池交易信息: ", "邓交易信息: "]
}
