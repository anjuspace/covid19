import React, { Component } from 'react'
import { metricText, getDataFromRegion, previousDay } from '../utils/utils'
import i18n from '../data/i18n.yml'

export default class MainCounts extends Component {
    state = {
        showNewCases: {
            confirmedCount: false,
            deadCount: false,
            curedCount: false
        }
    }

    toggleView = (metric) => {
        let showNewCases = this.state.showNewCases
        showNewCases[metric] = !showNewCases[metric]
        this.setState({ showNewCases })
    }

    render() {
        const { data, currentRegion, date, lang, fullPlot, fullTree } = this.props
        if (data == null) return <div />

        return (
            <div className="counts-wrap">
                {!fullPlot &&
                    !fullTree &&
                    [ 'confirmedCount', 'deadCount', 'curedCount' ].map((metric) => {
                        const count =
                            Object.keys(getDataFromRegion(data, currentRegion)[metric]).length > 0
                                ? getDataFromRegion(data, currentRegion)[metric][date]
                                : '—'
                        const preDate = previousDay(date, "2019-09-01", "2050-01-01")

                        const preCount = 
                            Object.keys(getDataFromRegion(data, currentRegion)[metric]).length > 0
                            ? getDataFromRegion(data, currentRegion)[metric][preDate]
                            : 0
                        let diff = 0
                        if (parseInt(count) != null && parseInt(preCount) != null) 
                            diff = parseInt(count) - parseInt(preCount)
                        
                        return (
                            <div key={`${metric}-number`} className="count-wrap">
                                <div className={`${metric}-count`}>{count ? count : 0}</div>
                                <div className="count-title">{metricText[metric][lang]}</div>

                                <div className={`${metric}-count`}>{diff}</div>
                                <div className="count-title">{i18n.NEWCASE[lang]}</div>
                            </div>

                        )
                    })}
            </div>
        )
    }
}
